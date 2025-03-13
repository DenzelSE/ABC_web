import Image from 'next/image';

export default function About() {
  return (
    <div className="text-gray-800">

      {/* Section 1: What is Africa’s Blockchain Club? */}
      <div className="py-16 bg-gradient-to-r from-[#D8CFC4] to-[#AFAFAF] opacity-80">
        <div className="flex items-center justify-between space-x-8">
          <div className="w-1/2 text-right pr-8">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              What is Africa’s Blockchain Club?
            </h2>
            <p className="text-xl font-light mb-4">
              Africa’s Blockchain Club is a thriving community dedicated to empowering individuals with blockchain knowledge, tools, and opportunities. We provide education, networking, and hands-on experience to help members navigate the decentralized world.
            </p>
          </div>
          <div className="w-1/2 relative mx-16" style={{ width: '600px', height: '400px' }}>
            <Image
              src="/eleABC.png"
              alt="What is Africa’s Blockchain Club?"
              layout="intrinsic"
              width={700}
              height={700}
              objectFit="cover"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Why does it exist? */}
      <div className="py-16 bg-gradient-to-r from-[#AFAFAF] to-[#D8CFC4] opacity-80">
        <div className="flex items-center justify-between space-x-8">
          <div className="w-1/2 relative mx-16" style={{ width: '600px', height: '400px' }}>
            <Image
              src="/ABC.png"
              alt="Why does it exist?"
              layout="intrinsic"
              width={400}
              height={300}
              objectFit="cover"
              className="rounded-xl shadow-xl"
            />
          </div>
          <div className="w-1/2 text-left pl-8">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Why does it exist?
            </h2>
            <p className="text-xl font-light mb-4">
              Africa’s Blockchain Club exists to bridge the gap in blockchain education and adoption across the continent. We aim to create a space where developers, entrepreneurs, and enthusiasts can collaborate and innovate using blockchain technology.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: What are we trying to achieve? */}
      <div className="py-16 bg-gradient-to-r from-[#D8CFC4] to-[#AFAFAF] opacity-80">
        <div className="flex items-center justify-between space-x-8">
          <div className="w-1/2 text-right pr-8">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              What are we trying to achieve?
            </h2>
            <p className="text-xl font-light mb-4">
              Our goal is to cultivate a new generation of blockchain developers and entrepreneurs who will leverage decentralized technology to drive innovation in Africa. We aim to provide resources, mentorship, and opportunities that enable real-world applications of blockchain.
            </p>
          </div>
          <div className="w-1/2 relative mx-16" style={{ width: '600px', height: '400px' }}>
            <Image
              src="/whiteABC.png"
              alt="What are we trying to achieve?"
              layout="intrinsic"
              width={400}
              height={300}
              objectFit="cover"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Section 4: Stay Connected and Explore More */}
      <div className="py-16 bg-gradient-to-r from-[#AFAFAF] to-[#D8CFC4] opacity-80">
        <div className="flex items-center justify-between space-x-8">
        <div className="w-1/2 relative mx-16" style={{ width: '600px', height: '400px' }}>
            <Image
              src="/background/bg1.png"
              alt="Stay Connected"
              layout="intrinsic"
              width={400}
              height={400}
              objectFit="cover"
              className="rounded-xl shadow-xl"
            />
          </div>
          <div className="w-1/2 text-left pl-8">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Stay Connected and Explore More
            </h2>
            <p className="text-xl font-light mb-4">
              Whether you’re looking to engage with our community, stay updated on new projects, or dive deeper into blockchain research, there’s plenty to explore.
            </p>
            <div className="flex gap-8 mb-8">
              <a
                href="https://x.com/africasblock?t=zfMJFY6242Fuk0DmYuTgsA&s=31"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#D8CFC4] text-white rounded-full hover:bg-[#5B6D9D] transition-all"
              >
                Follow Us on X
              </a>
              <a
                href="https://www.linkedin.com/company/africa-s-blockchain-club/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#AFAFAF] text-white rounded-full hover:bg-[#005C85] transition-all"
              >
                Follow Us on LinkedIn
              </a>
              <a
                href="https://t.me/yourtelegram"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#AFAFAF] text-white rounded-full hover:bg-[#006799] transition-all"
              >
                Join Our Telegram
              </a>
            </div>
            <p className="text-xl font-light">
              You can also check out our <a href="/projects" className="text-blue-500 underline">latest projects</a> and explore the cutting-edge research in our field. From white papers to case studies, we have the resources to help you dive deeper into blockchain technology.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
