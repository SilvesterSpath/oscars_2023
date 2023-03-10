import { MdRecentActors } from 'react-icons/md';
import { MdOutlineRecentActors, MdOutlineSummarize } from 'react-icons/md';
import { MdOutlineAnimation } from 'react-icons/md';
import { MdAnimation } from 'react-icons/md';
import { BiMoviePlay } from 'react-icons/bi';
import { GiDirectorChair } from 'react-icons/gi';
import { ImWoman } from 'react-icons/im';
import { IoMdWoman } from 'react-icons/io';
import { BsMusicNote } from 'react-icons/bs';
import { FaPhotoVideo } from 'react-icons/fa';
import { FaFeatherAlt } from 'react-icons/fa';
import { FaYandexInternational } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { GiPodium } from 'react-icons/gi';
import { GiHairStrands } from 'react-icons/gi';
import { GiFilmSpool } from 'react-icons/gi';
import { GiFeather } from 'react-icons/gi';
import { GiMusicalScore } from 'react-icons/gi';
import { RiScissors2Fill } from 'react-icons/ri';
import { SiAltiumdesigner } from 'react-icons/si';
import { AiOutlineSound } from 'react-icons/ai';
import { HiSparkles } from 'react-icons/hi';
import { RiFilePaper2Fill } from 'react-icons/ri';
import { FaRegNewspaper } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function CategoryLinks() {
  return (
    <div className='about-link'>
      <div className='links'>
        <Link className='a' to='/'>
          <GiPodium size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          standing
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/movies'>
          <BiMoviePlay size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          movie
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/actor'>
          <MdRecentActors size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          actor
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/actor_sup'>
          <MdOutlineRecentActors size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          actorSup
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/actress'>
          <ImWoman size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          actress
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/actress_sup'>
          <IoMdWoman size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          actressSup
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/director'>
          <GiDirectorChair size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          director
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/animated'>
          <MdAnimation size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          animated
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/cinematography'>
          <FaPhotoVideo size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          cinematogr
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/costume'>
          <MdDesignServices size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          costume
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/doc'>
          <FaFeatherAlt size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          docum
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/docs'>
          <GiFeather size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          doc short
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/editing'>
          <RiScissors2Fill size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          editing
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/internat'>
          <FaYandexInternational size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          internat
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/makeup'>
          <GiHairStrands size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          makeup
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/score'>
          <GiMusicalScore size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          score
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/song'>
          <BsMusicNote size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          song
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/design'>
          <SiAltiumdesigner size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          design
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/anims'>
          <MdOutlineAnimation size={20} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          anim_short
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/short'>
          <GiFilmSpool size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          short
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/sound'>
          <AiOutlineSound size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          sound
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/effects'>
          <HiSparkles size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          effects
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/adapted'>
          <RiFilePaper2Fill size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          adapted
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/original'>
          <FaRegNewspaper size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          original
        </p>
      </div>
      <div className='links'>
        <Link className='a' to='/summary'>
          <MdOutlineSummarize size={30} />
        </Link>
        <p className='b' style={{ color: 'gray' }}>
          summary
        </p>
      </div>
    </div>
  );
}

export default CategoryLinks;
