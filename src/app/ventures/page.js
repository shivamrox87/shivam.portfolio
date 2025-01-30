export default function Ventures() {
  return (
    <main className="min-h-screen py-8">
      {/* Use responsive padding and text sizing */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h1 className="text-3xl font-bold mb-8 sm:text-4xl md:text-5xl">
          Ventures
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Content cards with mobile-responsive sizing */}
          <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Project Title</h2>
            <p className="text-sm md:text-base text-gray-600">Project description...</p>
          </div>
        </div>
      </div>
    </main>
  )
} 