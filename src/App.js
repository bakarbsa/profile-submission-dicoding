function App() {
  // Cloud Storage Url
  const pp = 'https://storage.googleapis.com/dicoding-submission-bakar/pp1.jpg';
  const cv = 'https://storage.googleapis.com/dicoding-submission-bakar/Abu%20Bakar%20BSA_CV.pdf';
  const firebase = 'https://storage.googleapis.com/dicoding-submission-bakar/firebase.png';
  const flutter = 'https://storage.googleapis.com/dicoding-submission-bakar/flutter.png';
  const mongo = 'https://storage.googleapis.com/dicoding-submission-bakar/mongo.png';
  const react = 'https://storage.googleapis.com/dicoding-submission-bakar/react.png';
  const vue = 'https://storage.googleapis.com/dicoding-submission-bakar/vue.png';
  const nodejs = 'https://storage.googleapis.com/dicoding-submission-bakar/nodejs.png';
  return (
    <div className="App">
      <div className="h-screen bg-black bg flex flex-col justify-center items-center">
        <div className="w-44 h-44 rounded-full bg-blue-400 mb-5 overflow-hidden">
          <img src={pp} alt="" />
        </div>
        <h1 className="font-bold text-white text-3xl">Abu Bakar Bsa</h1>
        <h2 className="text-white text-lg">Junior Software Engineer</h2>
      </div>
      <div className='flex flex-col px-40 py-16'>
        <p className='font-semibold text-gray-500 text-opacity-50 mb-2'>Introduction</p>
        <h3 className='font-bold text-xl mb-6'>ABOUT ME</h3>
        <div className='flex gap-10 flex-row items-center justify-center mb-20'>
          <div className='flex items-center w-1/3 overflow-hidden'>
            <img src={pp} alt="" />
          </div>
          <div className='w-2/3 flex flex-col justify-center'>
            <h4 className='font-bold mb-4'>I'm Abu Bakar Bsa & Software Engineer</h4>
            <p className='font-normal text-gray-600 mb-4'>Hello, You can call me called Bakar. I am a student at ITS Computer Engineering. I have interest in Application Development, Web Development and Backend Development. I am currently studying in semester 6 and currently participating in the Merdeka Campus program at Bangkit Academy.</p>
            <div className='flex flex-row mb-2'>
              <div className='w-1/2'>
                <p className='font-bold'>Birthday: <span className='font-normal'>30 June 2001</span></p>
              </div>
              <div className='w-1/2'>
                <p className='font-bold'>Phone: <span className='font-normal'>+62 81357636366</span></p>
              </div>
            </div>
            <div className='flex flex-row mb-5'>
              <div className='w-1/2 '>
                <p className='font-bold'>Email: <span className='font-normal'>abubakar.bsa30@gmail.com</span></p>
              </div>
              <div className='w-1/2'>
                <p className='font-bold'>Instagram: <span className='font-normal'>bakarbsa_</span></p>
              </div>
            </div>
            <a 
              href={cv}
              className='w-28 py-1 text-sm text-white text-center bg-black rounded-md'
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-24">
          <div className="flex flex-col w-1/2">
            <p className='font-semibold text-gray-500 text-opacity-50 mb-2'>Abiliites</p>
            <h3 className='font-bold text-xl mb-6'>MY SKILL</h3>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col items-center justify-center w-min">
                <p className="text-gray-500 font-semibold mb-2">Flutter</p>
                <div className="w-16 h-16 overflow-hidden">
                  <img src={flutter} alt="" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-min">
                <p className="text-gray-500 font-semibold mb-2">ReactJS</p>
                <div className="w-16 h-16 overflow-hidden">
                  <img src={react} alt="" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-min">
                <p className="text-gray-500 font-semibold mb-2">VueJS</p>
                <div className="w-16 h-16 overflow-hidden">
                  <img src={vue} alt="" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-min">
                <p className="text-gray-500 font-semibold mb-2">MongoDB</p>
                <div className="w-16 h-16 overflow-hidden">
                  <img src={mongo} alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between mt-10">
              <div className="flex flex-col items-center justify-center w-min">
                <p className="text-gray-500 font-semibold mb-2">Firebase</p>
                <div className="w-16 h-16 overflow-hidden">
                  <img src={firebase} alt="" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-min">
                <p className="text-gray-500 font-semibold mb-2">NodeJS</p>
                <div className="w-16 h-16 overflow-hidden">
                  <img className="object-cover" src={nodejs} alt="" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-min">
                <div className="w-16 h-16 overflow-hidden">
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-min">
                <div className="w-16 h-16 overflow-hidden">
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <p className='font-semibold text-gray-500 text-opacity-50 mb-2'>What I've Done</p>
            <h3 className='font-bold text-xl mb-6'>MY EXPERIENCES</h3>
            <div className="flex flex-col gap-1 mb-4">
              <p className="font-semibold">Himpunan Mahasiswa Teknik Komputer</p>
              <p className="text-sm">Research and Technology | April 2021 - March 2022</p>
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <p className="font-semibold">Himpunan Mahasiswa Teknik Komputer</p>
              <p className="text-sm">Social and Professional | March 2022 - Present</p>
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <p className="font-semibold">B201 Telematics Laboratory Assistant</p>
              <p className="text-sm">Head of Multimedia and App | April 2021 - Present</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
