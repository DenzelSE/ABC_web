export default function About() {
  return (
    <div id="about" className="py-24 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Africa's Blockchain Club</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            We are a community-driven organization dedicated to advancing Web3 technology and fostering innovation in
            the blockchain space across Africa.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="bg-white/70 p-6 rounded-lg shadow-md">
              <dt className="text-lg leading-6 font-medium text-gray-900">Our Mission</dt>
              <dd className="mt-2 text-base text-gray-600">
                To empower developers with the knowledge and tools needed to build the decentralized future of Africa.
              </dd>
            </div>
            <div className="bg-white/70 p-6 rounded-lg shadow-md">
              <dt className="text-lg leading-6 font-medium text-gray-900">Our Vision</dt>
              <dd className="mt-2 text-base text-gray-600">
                A world where blockchain technology is accessible to all and drives positive change in African
                societies.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

