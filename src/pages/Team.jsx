import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import bikashImage from "../assets/bikash.jpg";
import rajImage from "../assets/pade.jpeg";
import ashuImage from "../assets/ashu.png";


const teamMembers = [
    {
    id: 1,
    name: "Raj Kumar",
    designation: "Business Development Manager",
    image: rajImage,
    description:
      "Drives business growth by building strong client relationships, understanding business needs, and delivering tailored technology solutions that create lasting value.",
    // facebook: "https://facebook.com/",
    // twitter: "https://twitter.com/",
    linkedin: "https://in.linkedin.com/in/rajkishor-mandal-508b43427",
    },
  
  {
    id: 2,
    name: "Bikash Kumar",
    designation: "Founder & Technical Lead",
    image: bikashImage,
    description:
      "Leads the technical vision of StackMyCode with expertise in Full-Stack Development, QA Automation, AI-powered solutions, and scalable software architecture.",
    // facebook: "https://facebook.com/",
    // twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/in/bikash-roshan-0b954b202/",
  },
//   {
//     id: 2,
//     name: "Kajal Kumari",
//     designation: "UI/UX Designer",
//     image: {kajalImage},
//     description:
//       "Focused on business operations, client relationships, and ensuring exceptional service delivery for every project.",
//     facebook: "https://facebook.com/",
//     twitter: "https://twitter.com/",
//     linkedin: "https://linkedin.com/",
//     },
  {
    id: 3,
    name: "Ashutosh Kumar",
    designation: "Software Developer",
    image: ashuImage,
    description:
      "Develops modern, high-performance web applications with clean, maintainable code, delivering secure and user-friendly digital experiences.",
    // facebook: "https://facebook.com/",
    // twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
  },
];

export default function Team() {
  return (
    <section className="py-24 relative z-10 bg-gray-50 dark:bg-transparent min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#38bdf8] mb-4 tracking-tight">
            Our Team
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex-1 min-w-[280px] max-w-[320px] relative bg-white dark:bg-[#0f172a] rounded-[2rem] shadow-xl overflow-hidden flex flex-col items-center pt-8 pb-10 px-8 border border-gray-100 dark:border-gray-800 transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Curved Background */}
              <div className="absolute top-0 left-0 w-full h-32 overflow-hidden z-0">
                <div className="absolute -top-[60%] -left-[20%] w-[140%] h-[150%] bg-blue-100/70 dark:bg-blue-900/30 rounded-[50%] rotate-[-10deg]" />
              </div>

              {/* Avatar */}
              <div className="relative z-10 w-28 h-28 flex items-center justify-center mt-2">
                <div className="absolute inset-0 border-[3px] border-gray-800 dark:border-gray-400 rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-lg rounded-br-lg"></div>

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 object-cover rounded-tr-[1.5rem] rounded-bl-[1.5rem] rounded-tl-md rounded-br-md"
                />
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 mt-6 mb-4 z-10">
                <div className="w-5 h-[2px] bg-gray-300 dark:bg-gray-600"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-gray-400"></div>
                <div className="w-5 h-[2px] bg-gray-300 dark:bg-gray-600"></div>
              </div>

              {/* Details */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white z-10">
                {member.name}
              </h3>

              <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-5 z-10">
                {member.designation}
              </p>

              <p className="text-[11px] text-gray-500 dark:text-gray-400 text-center leading-relaxed mb-8 z-10">
                {member.description}
              </p>

              {/* Social Icons */}
              <div className="flex gap-2.5 z-10">
                {/* <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center bg-gray-600 dark:bg-gray-300 text-white dark:text-gray-900 rounded-md hover:bg-primary hover:text-white transition-colors"
                >
                  <FaFacebookF size={13} />
                </a> */}

                {/* <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center bg-gray-600 dark:bg-gray-300 text-white dark:text-gray-900 rounded-md hover:bg-primary hover:text-white transition-colors"
                >
                  <FaTwitter size={13} />
                </a> */}

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center bg-gray-600 dark:bg-gray-300 text-white dark:text-gray-900 rounded-md hover:bg-primary hover:text-white transition-colors"
                >
                  <FaLinkedinIn size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}