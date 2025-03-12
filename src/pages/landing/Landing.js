import { useRef } from 'react';
import { Link } from 'react-router-dom';
import React, { Suspense } from 'react';
import Chatbot from '../../components/Chat';
import Marketing from '../../assets/images/marketing.png';
import Research from '../../assets/images/research.png';
import Development from '../../assets/images/dev.png';
import Ui from '../../assets/images/uiux.png';
import Card from '../../components/Card';
import Testimonial from '../../components/TestimonialCard';
import Hero from '../../assets/images/pattern1.jpg';
import { Navigation, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {
  IoArrowBack,
  IoArrowDownCircleOutline,
  IoArrowForward,
  IoCreateOutline,
  IoNotificationsOutline,
  IoPeople,
  IoPeopleOutline,
  IoTicketOutline,
} from 'react-icons/io5';
import {
  MdManageHistory,
  MdOutlineFileDownload,
  MdOutlinePrivacyTip,
  MdRsvp,
} from 'react-icons/md';
import { RiMouseLine, RiSteamLine } from 'react-icons/ri';
import Hero2 from '../../assets/images/3187910.jpg';
import Security from '../../assets/images/security.jpg';
import { InfiniteMovingCards } from './InfiniteCards';
import People from '../../assets/images/people.png';
import { motion } from 'framer-motion';
import SliderClubs from '../../components/SliderClubs';

// Typewriter animation for the main text
const typewriterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const data = [
  {
    title: 'Simplified Event Creation',
    description:
      'Easily create and manage events by defining dates, locations, and visuals. Customize event details and ticketing options effortlessly.',
    icon: <IoCreateOutline />,
  },
  {
    title: 'Real-Time Updates',
    description:
      'Get instant notifications on event changes and attendee responses to stay updated and never miss important information.',
    icon: <IoNotificationsOutline />,
  },
  {
    title: 'Effortless Participant Invitations',
    description:
      'Send invitation links through email or social media for easy registration and track attendee responses.',
    icon: <IoTicketOutline />,
  },
  {
    title: 'Adaptable Event Privacy',
    description:
      'Control event visibility with options for private or public settings, tailoring privacy to suit your event’s needs.',
    icon: <MdOutlinePrivacyTip />,
  },
  {
    title: 'Simple Attendee Management',
    description:
      'Easily track RSVPs, attendance, and participant details. Use QR codes for quick check-ins to enhance the event.',
    icon: <IoPeopleOutline />,
  },
  {
    title: 'Attendee List Download',
    description:
      'Download attendee lists in XLSX format for easy access and management, ensuring you stay connected even without internet.',
    icon: <MdOutlineFileDownload />,
  },
];

function Landing() {
  const swiper = useSwiper();
  const swiperRef = useRef(null);

  const token = window.localStorage.getItem('token');

  return (
    <div className="flex-1 bg-white font-poppins select-none">
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 relative h-full">
        <div className="absolute inset-0 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
        <section className="flex flex-col md:flex-row justify-center items-center w-full py-8 lg:py-16 gap-8 md:gap-0 container max-h-[85vh] mt-28 md:mt-0 relative">
          {/* Hero Section */}
          <motion.div
            className="flex flex-col gap-4 justify-center z-10"
            style={{ flexBasis: '70%' }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-6xl text-black font-bold leading-relaxed lg:leading-normal drop-shadow-2xl"
              variants={typewriterVariants}
              initial="hidden"
              animate="visible"
            >
              {'Ignite Your Creativity, Design Unforgettable Gatherings'
                .split('')
                .map((char, index) => (
                  <motion.span key={index} variants={letterVariant}>
                    {char}
                  </motion.span>
                ))}
            </motion.h1>

            <motion.p
              className="md:max-w-[90%] text-base md:text-lg py-4 text-slate-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Effortless RSVP and Coordination for Creators with SearchMyClub
            </motion.p>

            <motion.div
              className="inline-flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to={token ? '/dashboard' : '/auth/signup'}
                  className="bg-black flex rounded-2xl px-4 py-2 text-white text-center font-semibold"
                >
                  {token ? 'Go to Dashboard >' : 'Get Started >'}
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/explore"
                  className="rounded-2xl flex px-4 py-2 text-black text-center font-semibold"
                >
                  Explore Events {'\u003E'}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Reveal */}
          <motion.div
            className="flex w-full h-[70vh] justify-center items-center mb-12 md:mb-0"
            style={{ flexBasis: '50%' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 1 }}
          >
            <motion.img src={People} className="w-full" />
          </motion.div>
        </section>
        <SliderClubs />
      </div>
      <section className="relative flex flex-col-reverse lg:flex-row w-full py-12 md:py-16 justify-between gap-8 container max-w-7xl min-h-[75vh]">
        {/* Image Section */}
        <motion.div
          className="w-full flex justify-center items-center"
          style={{ flexBasis: '50%' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img className="rounded-xl shadow-lg" src={Hero2} alt="Hero" />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex flex-col gap-6 text-left justify-center"
          style={{ flexBasis: '50%' }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col">
            <span className="text-indigo-500 text-sm font-semibold tracking-wide uppercase">
              Empowering Creators
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-primary font-semibold leading-tight my-6">
              Unlock Your Creative Drive
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-6">
              Our platform empowers individual creators and artists to unleash
              imagination and orchestrate unforgettable gatherings. Whether it's
              a solo showcase, live performance, or workshop, our tools ensure
              your events are a remarkable success.
            </p>
          </div>
          <motion.div
            className="inline-flex items-center gap-2"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to={token ? '/dashboard' : '/auth/signup'}
                className="bg-black flex rounded-2xl px-4 py-2 text-white text-center font-semibold"
              >
                {token ? 'Go to Dashboard >' : 'Get Started >'}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <div className="">
        <section className="flex flex-col lg:flex-row w-full items-center py-8 lg:pt-16 lg:pb-0 justify-between gap-4 md:gap-0 container">
          <div className="flex flex-col mb-4">
            <div className="flex-[80%] space-y-4">
              <p className="text-accent tracking-[1px] font-semibold  items-center gap-2 flex">
                <span className="text-indigo-500 text-sm font-semibold tracking-wide uppercase">
                  Security
                </span>
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-primary font-semibold leading-tight my-6">
                Effortless Event Planning and Coordination
              </h1>
            </div>
            <p className="flex-[80%] w-full text-base md:text-lg leading-relaxed md:max-w-[90%] py-4 text-gray-600 text-justify mt-6">
              Bid farewell to the complexities of event organization. Our
              intuitive interface simplifies the process, enabling you to
              concentrate on your artistic pursuits. Seamlessly create and
              oversee events, from scheduling dates and venues to furnishing
              event details and ticketing options. Streamline your planning
              journey and transform your vision into reality.
            </p>
          </div>
        </section>
        <div className="flex flex-row py-4 items-center justify-between container">
          <hr className="w-full  border border-neutral-200 opacity-30"></hr>
        </div>
        <div className="w-full h-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={data} direction="left" speed="slow" />
        </div>
      </div>
      <section className="relative flex flex-col-reverse lg:flex-row w-full py-12 md:py-16 justify-between gap-8 container max-w-7xl min-h-[75vh]">
        {/* Text Section */}
        <motion.div
          className="flex flex-col gap-6 text-left justify-center"
          style={{ flexBasis: '50%' }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col">
            <span className="text-indigo-500 text-sm font-semibold tracking-wide uppercase">
              Registrations Made Easy
            </span>
            <h1 className="text-3xl md:text-5xl text-primary font-semibold md:leading-normal my-6">
              Safety and Dependability
            </h1>
            <p className="text-base md:text-lg leading-[1.4rem] md:max-w-[90%] text-neutral-500 text-justify mb-6">
              Rest assured that your event information is safeguarded with our
              web application. We prioritize data security and implement
              industry-standard measures to protect your data. Our robust
              infrastructure ensures uninterrupted event management, allowing
              you to concentrate on creating exceptional experiences.
            </p>
          </div>
          <motion.div
            className="inline-flex items-center gap-2"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to={token ? '/dashboard' : '/auth/signup'}
                className="bg-black flex rounded-2xl px-4 py-2 text-white text-center font-semibold"
              >
                {token ? 'Go to Dashboard >' : 'Get Started >'}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Image Section */}
        <motion.div
          className="w-full flex justify-center items-center"
          style={{ flexBasis: '50%' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img className="rounded-xl shadow-lg" src={Security} alt="Security" />
        </motion.div>
      </section>
      <Chatbot />
    </div>
  );
}

export default Landing;
