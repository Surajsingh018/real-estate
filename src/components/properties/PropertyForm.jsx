// src/components/admin/properties/PropertyForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../../../api/admin';
import { Button } from '../../../components/admin/ui/button';
import { Input } from '../../../components/admin/ui/input';
import { Label } from '../../../components/admin/ui/label';
import { Textarea } from '../../../components/admin/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/admin/ui/select';
import LoadingSpinner from '../../../components/admin/ui/LoadingSpinner';
import { useToast } from "../hooks/use-toast";
import { Plus, X } from "lucide-react";


const PropertyForm = ({ propertyId, isEdit = false }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  /* ---------- form state ---------- */
  const [formData, setFormData] = useState({
    title: '',
    address: '',
    location: '',
    startDate: '',
    endDate: '',
    goalAmount: 0,
    currentAmount: 0,
    investorsCount: 0,
    propertyType: '',
    distribution: '',
    maxTerm: '',
    annualReturn: '',
    images: [],
    gallery: [],
    projectDescription: '',
    amenities: [], // NEW
    reasonsToInvest: [],
    financialTerms: {
      maxLoanTerm: '',
      security: '',
      annualReturn: '',
    },
    tieredReturn: [],
    capitalGrowthSplit: [],
    owner: { name: '', bio: '', avatarUrl: '' },
    faqs: [],
    risks: '',
    mapEmbedUrl: '',
    occupancyOptions: [],
    investmentOverview: '',
    keyUpdates: [],
    reports: [],
    totalUnits: 0,
    slotsCount: 0,
    slotsSold: 0,
    totalValue: 0,
    status: 'active',
  });

  /* ---------- UI helpers ---------- */
  const [errors, setErrors] = useState({});
  const [newImage, setNewImage] = useState('');
  const [newGalleryImage, setNewGalleryImage] = useState('');
  const [newReason, setNewReason] = useState('');
  const [newOccupancyOption, setNewOccupancyOption] = useState('');
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });
  const [newTieredReturn, setNewTieredReturn] = useState({ range: '', rate: '' });
  const [newCapitalGrowthSplit, setNewCapitalGrowthSplit] = useState({ party: '', pct: '' });
  const [newKeyUpdate, setNewKeyUpdate] = useState({ date: '', text: '', link: '' });
  const [newReport, setNewReport] = useState({ title: '', desc: '', label: '', url: '' });

  /* ---------- file states ---------- */
  const [imagesFiles, setImagesFiles] = useState([]);
  const [galleryFiles, setGalleryFiles] = useState([]);

  /* ---------- amenities helpers ---------- */
  const [newAmenity, setNewAmenity] = useState('');
  const commonAmenities = [
    'Gym',
    'Swimming Pool',
    'Covered parking',
    'Playing area',
    'Community view',
    'Health Club',
    'Supermarket',
    'Restaurant',
    'Spa',
  ];

  const addAmenity = () => {
    if (newAmenity.trim()) {
      setFormData(p => ({ ...p, amenities: [...p.amenities, newAmenity.trim()] }));
      setNewAmenity('');
    }
  };
  const removeAmenity = text =>
    setFormData(p => ({ ...p, amenities: p.amenities.filter(a => a !== text) }));

  /* ---------- load on edit ---------- */
  useEffect(() => {
    if (isEdit && propertyId) loadProperty();
  }, [isEdit, propertyId]);

  const loadProperty = async () => {
    if (!propertyId) return;
    setLoading(true);
    try {
      const property = await apiService.getProperty(propertyId);
      setFormData({
        ...formData,
        ...property,
        startDate: property.startDate
          ? new Date(property.startDate).toISOString().split('T')[0]
          : '',
        endDate: property.endDate
          ? new Date(property.endDate).toISOString().split('T')[0]
          : '',
        financialTerms: property.financialTerms || formData.financialTerms,
        owner: property.owner || formData.owner,
        keyUpdates: property.keyUpdates || [],
        reports: property.reports || [],
        tieredReturn: property.tieredReturn || [],
        capitalGrowthSplit: property.capitalGrowthSplit || [],
        faqs: property.faqs || [],
        reasonsToInvest: property.reasonsToInvest || [],
        occupancyOptions: property.occupancyOptions || [],
        amenities: property.amenities || [], // NEW
      });
    } catch (err) {
      toast({ title: 'Error', description: 'Failed to load property', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  /* ---------- validation ---------- */
  const validate = () => {
    const e = {};
    if (!formData.title.trim()) e.title = 'Title is required.';
    if (!Number(formData.totalUnits) || Number(formData.totalUnits) <= 0)
      e.totalUnits = 'Total Units must be > 0.';
    if (!Number(formData.slotsCount) || Number(formData.slotsCount) <= 0)
      e.slotsCount = 'Slots Count must be > 0.';
    if (!Number(formData.totalValue) || Number(formData.totalValue) <= 0)
      e.totalValue = 'Total Value must be > 0.';
    if (formData.startDate && formData.endDate) {
      const s = new Date(formData.startDate);
      const eDate = new Date(formData.endDate);
      if (eDate < s) e.endDate = 'End Date cannot be earlier than Start Date.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ---------- submit ---------- */
  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) {
      toast({ title: 'Fix errors', variant: 'destructive' });
      return;
    }
    setSubmitting(true);

    try {
      const basePayload = {
        ...formData,
        startDate: formData.startDate ? new Date(formData.startDate) : null,
        endDate: formData.endDate ? new Date(formData.endDate) : null,
      };

      const hasFiles = imagesFiles.length || galleryFiles.length;
      if (hasFiles) {
        const fd = new FormData();
        Object.entries(basePayload).forEach(([k, v]) => {
          if (['images', 'gallery', 'financialTerms', 'tieredReturn', 'capitalGrowthSplit', 'owner', 'faqs', 'reasonsToInvest', 'occupancyOptions', 'keyUpdates', 'reports', 'amenities'].includes(k)) return;
          fd.append(k, v ?? '');
        });
        fd.append('financialTerms', JSON.stringify(basePayload.financialTerms || {}));
        fd.append('tieredReturn', JSON.stringify(basePayload.tieredReturn || []));
        fd.append('capitalGrowthSplit', JSON.stringify(basePayload.capitalGrowthSplit || []));
        fd.append('owner', JSON.stringify(basePayload.owner || {}));
        fd.append('faqs', JSON.stringify(basePayload.faqs || []));
        fd.append('reasonsToInvest', JSON.stringify(basePayload.reasonsToInvest || []));
        fd.append('occupancyOptions', JSON.stringify(basePayload.occupancyOptions || []));
        fd.append('amenities', JSON.stringify(basePayload.amenities || []));
        fd.append('keyUpdates', JSON.stringify(basePayload.keyUpdates || []));
        fd.append('reports', JSON.stringify(basePayload.reports || []));
        if ((basePayload.images || []).length) fd.append('images', basePayload.images.join(','));
        if ((basePayload.gallery || []).length) fd.append('gallery', basePayload.gallery.join(','));
        imagesFiles.forEach(f => fd.append('images', f));
        galleryFiles.forEach(f => fd.append('gallery', f));

        if (isEdit && propertyId) await apiService.updateProperty(propertyId, fd);
        else await apiService.createProperty(fd);
      } else {
        if (isEdit && propertyId) await apiService.updateProperty(propertyId, basePayload);
        else await apiService.createProperty(basePayload);
      }
      toast({ title: 'Success', description: isEdit ? 'Updated' : 'Created' });
      navigate('/admin/properties');
    } catch {
      toast({ title: 'Error', description: 'Save failed', variant: 'destructive' });
    } finally {
      setSubmitting(false);
    }
  };

  /* ---------- generic list helpers ---------- */
  const addToList = (key, value) =>
    setFormData(p => ({ ...p, [key]: [...p[key], value] }));
  const removeFromList = (key, idx) =>
    setFormData(p => ({ ...p, [key]: p[key].filter((_, i) => i !== idx) }));

  /* ---------- UI ---------- */
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        {isEdit ? 'Edit Property' : 'Create New Property'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* BASIC INFO */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-900">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Title</Label>
              <Input
                value={formData.title}
                onChange={e => setFormData(p => ({ ...p, title: e.target.value }))}
                required
              />
              {errors.title && <p className="text-red-500 text-xs">{errors.title}</p>}
            </div>
            <div>
              <Label>Address</Label>
              <Input
                value={formData.address}
                onChange={e => setFormData(p => ({ ...p, address: e.target.value }))}
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                value={formData.location}
                onChange={e => setFormData(p => ({ ...p, location: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label>Property Type</Label>
              <Select
                value={formData.propertyType}
                onValueChange={v => setFormData(p => ({ ...p, propertyType: v }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {['residential', 'commercial', 'industrial', 'land', 'mixed-use'].map(t => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Start Date</Label>
              <Input
                type="date"
                value={formData.startDate}
                onChange={e => setFormData(p => ({ ...p, startDate: e.target.value }))}
              />
            </div>
            <div>
              <Label>End Date</Label>
              <Input
                type="date"
                value={formData.endDate}
                onChange={e => setFormData(p => ({ ...p, endDate: e.target.value }))}
              />
              {errors.endDate && <p className="text-red-500 text-xs">{errors.endDate}</p>}
            </div>
          </div>
        </div>

        {/* INVESTMENT DETAILS */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-900">Investment Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <Label>Goal Amount ($)</Label>
              <Input
                type="number"
                value={formData.goalAmount}
                onChange={e => setFormData(p => ({ ...p, goalAmount: Number(e.target.value) }))}
              />
            </div>
            <div>
              <Label>Current Amount ($)</Label>
              <Input
                type="number"
                value={formData.currentAmount}
                onChange={e => setFormData(p => ({ ...p, currentAmount: Number(e.target.value) }))}
              />
            </div>
            <div>
              <Label>Investors Count</Label>
              <Input
                type="number"
                value={formData.investorsCount}
                onChange={e => setFormData(p => ({ ...p, investorsCount: Number(e.target.value) }))}
              />
            </div>
            <div>
              <Label>Annual Return (%)</Label>
              <Input
                value={formData.annualReturn}
                onChange={e => setFormData(p => ({ ...p, annualReturn: e.target.value }))}
              />
            </div>
            <div>
              <Label>Distribution</Label>
              <Input
                value={formData.distribution}
                onChange={e => setFormData(p => ({ ...p, distribution: e.target.value }))}
              />
            </div>
            <div>
              <Label>Max Term</Label>
              <Input
                value={formData.maxTerm}
                onChange={e => setFormData(p => ({ ...p, maxTerm: e.target.value }))}
              />
            </div>
            <div>
              <Label>Total Units</Label>
              <Input
                type="number"
                value={formData.totalUnits}
                onChange={e => setFormData(p => ({ ...p, totalUnits: Number(e.target.value) }))}
              />
            </div>
            <div>
              <Label>Slots Count</Label>
              <Input
                type="number"
                value={formData.slotsCount}
                onChange={e => setFormData(p => ({ ...p, slotsCount: Number(e.target.value) }))}
              />
            </div>
            <div>
              <Label>Slots Sold</Label>
              <Input
                type="number"
                value={formData.slotsSold}
                onChange={e => setFormData(p => ({ ...p, slotsSold: Number(e.target.value) }))}
              />
            </div>
            <div>
              <Label>Total Value ($)</Label>
              <Input
                type="number"
                value={formData.totalValue}
                onChange={e => setFormData(p => ({ ...p, totalValue: Number(e.target.value) }))}
              />
            </div>
          </div>
        </div>

        {/* DESCRIPTIONS */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-900">Descriptions</h3>
          <div>
            <Label>Project Description</Label>
            <Textarea
              value={formData.projectDescription}
              onChange={e => setFormData(p => ({ ...p, projectDescription: e.target.value }))}
              rows={4}
            />
          </div>
          {/* AMENITIES */}
          <div>
            <Label>Amenities</Label>
            {/* checkboxes */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm mt-2">
              {commonAmenities.map(item => (
                <label key={item} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.amenities.includes(item)}
                    onChange={e =>
                      e.target.checked
                        ? addToList('amenities', item)
                        : removeAmenity(item)
                    }
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  {item}
                </label>
              ))}
            </div>
            {/* custom add */}
            <div className="flex gap-2 mt-3">
              <Input
                placeholder="Add custom amenity"
                value={newAmenity}
                onChange={e => setNewAmenity(e.target.value)}
              />
              <Button type="button" onClick={addAmenity} className="bg-blue-600 text-white">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {/* chips */}
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.amenities.map(a => (
                <div key={a} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg">
                  <span className="text-sm">{a}</span>
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => removeAmenity(a)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OWNER */}
        <div>
          <h3 className="text-xl font-semibold text-blue-900">Owner Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Owner Name"
              value={formData.owner.name}
              onChange={e =>
                setFormData(p => ({ ...p, owner: { ...p.owner, name: e.target.value } }))
              }
            />
            <Input
              placeholder="Avatar URL"
              value={formData.owner.avatarUrl}
              onChange={e =>
                setFormData(p => ({ ...p, owner: { ...p.owner, avatarUrl: e.target.value } }))
              }
            />
            <Textarea
              placeholder="Owner Bio"
              value={formData.owner.bio}
              onChange={e =>
                setFormData(p => ({ ...p, owner: { ...p.owner, bio: e.target.value } }))
              }
              rows={3}
              className="md:col-span-2"
            />
          </div>
        </div>

        {/* IMAGES */}
        <div>
          <h3 className="text-xl font-semibold text-blue-900">Images</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <Label>Property Images</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Image URL"
                  value={newImage}
                  onChange={e => setNewImage(e.target.value)}
                />
                <Button type="button" onClick={() => addToList('images', newImage)} className="bg-blue-600 text-white">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {formData.images.map((img, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-100 p-2 rounded mt-1">
                  <img src={img} alt="" className="w-16 h-16 object-cover rounded" />
                  <Button type="button" size="sm" onClick={() => removeFromList('images', i)}>
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
            <div>
              <Label>Gallery Images</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Gallery URL"
                  value={newGalleryImage}
                  onChange={e => setNewGalleryImage(e.target.value)}
                />
                <Button type="button" onClick={() => addToList('gallery', newGalleryImage)} className="bg-blue-600 text-white">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {formData.gallery.map((img, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-100 p-2 rounded mt-1">
                  <img src={img} alt="" className="w-16 h-16 object-cover rounded" />
                  <Button type="button" size="sm" onClick={() => removeFromList('gallery', i)}>
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SUBMIT */}
        <div className="flex gap-4 pt-6">
          <Button type="submit" disabled={submitting} className="bg-blue-600 text-white">
            {submitting && <LoadingSpinner size="sm" className="mr-2" />}
            {isEdit ? 'Update Property' : 'Create Property'}
          </Button>
          <Button type="button" onClick={() => navigate('/admin/properties')} className="bg-gray-200">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;
