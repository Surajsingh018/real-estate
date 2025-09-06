// src/api/admin.js
import api from "../lib/api";

// Helper: our backend responds { success, message, data }
const unwrap = (res) => res.data; // keep full payload (success/message/data)

class ApiService {
  // ========== Properties ==========
  async getProperties() {
    return api.get("/properties").then(unwrap);
  }

  async getProperty(id) {
    return api.get(`/properties/${id}`).then(unwrap);
  }

  async createProperty(data) {
    // if you send FormData (for images), axios handles the boundary & headers
    const isForm = data instanceof FormData;
    return api
      .post("/admin", data, { headers: isForm ? { "Content-Type": "multipart/form-data" } : undefined })
      .then(unwrap);
  }

  async updateProperty(id, data) {
    const isForm = data instanceof FormData;
    return api
      .put(`/admin/${id}`, data, { headers: isForm ? { "Content-Type": "multipart/form-data" } : undefined })
      .then(unwrap);
  }

  async deleteProperty(id) {
    return api.delete(`/admin/${id}`).then(unwrap);
  }

  async getDashboardStats() {
    const propsPayload = await this.getProperties();
    const properties = Array.isArray(propsPayload) ? propsPayload : propsPayload?.data || [];

    const totalProperties = properties.length;
    const totalInvested = properties.reduce((sum, p) => {
      const n = Number(String(p.currentAmount || 0).replace(/,/g, ""));
      return sum + (Number.isFinite(n) ? n : 0);
    }, 0);
    const averageReturnRate =
      totalProperties > 0
        ? properties.reduce((sum, p) => sum + (parseFloat(p.annualReturn) || 0), 0) / totalProperties
        : 0;
    const activeInvestors = properties.reduce((sum, p) => sum + (p.investorsCount || 0), 0);

    return { totalProperties, totalInvested, averageReturnRate, activeInvestors };
  }

  // ========== Admin → Users ==========
  // GET /api/admin/users?status=active|blocked  (role=user only)
  async getUsers(status) {
    const q = status && status !== "all" ? `?status=${encodeURIComponent(status)}` : "";
    return api.get(`/admin/users${q}`).then(unwrap);
  }

  // PATCH /api/admin/users/:id/status  { status: 'active' | 'blocked' }
  async setUserStatus(userId, status) {
    return api.patch(`/admin/users/${userId}/status`, { status }).then(unwrap);
  }

  // GET /api/admin/users/:userId/investments
  async getUserInvestments(userId) {
    return api.get(`/admin/users/${userId}/investments`).then(unwrap);
  }
}

export const apiService = new ApiService();

