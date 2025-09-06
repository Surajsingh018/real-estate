import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import properties from '../data/properties';

export default function Properties() {
  /* ------------ STATE ------------ */
  const [favs, setFavs] = useState(() => new Set());
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All'); // All | active | sold
  const [sortBy, setSortBy] = useState('createdAt'); // createdAt | totalValue
  const [order, setOrder] = useState('desc'); // asc | desc

  /* ------------ HELPERS ------------ */
  const toggleFav = (id) => {
    const next = new Set(favs);
    next.has(id) ? next.delete(id) : next.add(id);
    setFavs(next);
  };

  const filtered = useMemo(() => {
    let list = [...properties];

    /* 1. search */
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q)
      );
    }

    /* 2. status */
    if (status !== 'All') {
      list = list.filter((p) => p.status === status);
    }

    /* 3. sort */
    list.sort((a, b) => {
      let av = a[sortBy];
      let bv = b[sortBy];

      if (sortBy === 'totalValue') {
        av = Number(av);
        bv = Number(bv);
      }
      if (sortBy === 'createdAt') {
        av = new Date(av);
        bv = new Date(bv);
      }

      return order === 'asc' ? av - bv : bv - av;
    });

    return list;
  }, [search, status, sortBy, order]);

  /* ------------ RENDER ------------ */
  return (
    <>
      {/* Hero section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid" width={60} height={60} patternUnits="userSpaceOnUse">
              <path d="M.5 59V.5H59" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Discover Your Next Property
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-indigo-200">
            Hand-picked investment opportunities across the US, curated for high
            returns.
          </p>
        </div>
      </section>

      {/* Filter / Search bar */}
      <section className="max-w-7xl mx-auto px-4 pt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Status filter */}
          <div className="flex gap-2">
            {['All', 'active', 'sold'].map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  status === s
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <select
            value={`${sortBy}-${order}`}
            onChange={(e) => {
              const [by, ord] = e.target.value.split('-');
              setSortBy(by);
              setOrder(ord);
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm"
          >
            <option value="createdAt-desc">Latest First</option>
            <option value="createdAt-asc">Oldest First</option>
            <option value="totalValue-desc">Price ↓</option>
            <option value="totalValue-asc">Price ↑</option>
          </select>
        </div>
      </section>

      {/* Property Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-12">No properties match your criteria.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => {
              const isFav = favs.has(p.id);
              return (
                <article
                  key={p.id}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={p.images?.[0] || '/placeholder.jpg'}
                      alt={p.title}
                      className="h-56 w-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <button
                      onClick={() => toggleFav(p.id)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/70 backdrop-blur hover:bg-white"
                    >
                      {isFav ? (
                        <HeartSolid className="w-5 h-5 text-red-500" />
                      ) : (
                        <HeartIcon className="w-5 h-5 text-gray-700" />
                      )}
                    </button>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold truncate">{p.title}</h3>
                    <p className="mt-1 text-2xl font-bold text-blue-600">
                      ${p.totalValue?.toLocaleString()}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {p.location} • {p.sqft} sqft
                    </p>

                    {/* Buttons row */}
                    <div className="mt-4 flex items-center gap-3">
                      <Link
                        to={`/property/${p.id}`}
                        className="text-sm font-medium text-blue-600 hover:text-blue-700"
                      >
                        View Details →
                      </Link>

                      <a
                        href="/login"
                        className="ml-auto px-4 py-2 bg-[#5927e3] text-white rounded-lg font-semibold text-sm shadow hover:bg-blue-700 transition"
                      >
                        Invest Now
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}