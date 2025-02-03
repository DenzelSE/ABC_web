export default function About() {
    return (
      <div id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About BlockChain Builders</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We are a community-driven organization dedicated to advancing Web3 technology and fostering innovation in
              the blockchain space.
            </p>
          </div>
          <div className="mt-20">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">Our Mission</dt>
                <dd className="mt-2 text-base text-gray-500">
                  To empower developers with the knowledge and tools needed to build the decentralized future.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">Our Vision</dt>
                <dd className="mt-2 text-base text-gray-500">
                  A world where blockchain technology is accessible to all and drives positive change in society.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    )
  }
  
  