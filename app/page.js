import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            GearShare Rural
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Find nearby farm equipment for rent in real‑time and keep your operations moving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="text"
              placeholder="Search equipment or location"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Link href="/map" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Browse Map
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            How GearShare Rural Works
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Search Nearby</h3>
              <p className="text-gray-600">
                See what equipment owners are offering in your area, updated in real time.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 10c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Booking</h3>
              <p className="text-gray-600">
                Reserve equipment with a few clicks and get confirmation instantly.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 100-4 2 2 0 000 4zm-6 0a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Local</h3>
              <p className="text-gray-600">
                Help neighbors earn extra income by renting out their idle equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-50 py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to reduce downtime?
          </h2>
          <p className="text-gray-600 mb-6">
            Join the growing community of farmers sharing equipment across rural counties.
          </p>
          <Link href="/map" className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Explore the Map
          </Link>
        </div>
      </section>
    </div>
  );
}