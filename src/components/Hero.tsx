export default function Hero() {
  return (
    <>
      {/* Hero Section: Image Cover With Header Actions Dark */}
      <div
        className='bg-cover bg-bottom'
        style={{
          backgroundImage:
            'url("https://cdn.tailkit.com/media/placeholders/photo-Nyvq2juw4_o-1280x400.jpg")',
        }}>
        <div className='bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-sm'>
          {/* Header */}
          <header
            id='page-header'
            className='flex flex-none items-center py-10'>
            <div className='flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-10'>
              <div>
                <a
                  href='#'
                  className='inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-white hover:opacity-75'>
                  <svg
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-rose-300 opacity-75 hi-outline hi-cube-transparent inline-block w-6 h-6'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5'
                    />
                  </svg>
                  <span>Company</span>
                </a>
              </div>
              <div className='flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10'>
                <nav className='space-x-4 md:space-x-6'>
                  <a
                    href='#'
                    className='font-semibold text-gray-300 hover:text-gray-400'>
                    <span>Features</span>
                  </a>
                  <a
                    href='#'
                    className='font-semibold text-gray-300 hover:text-gray-400'>
                    <span>Plans</span>
                  </a>
                  <a
                    href='#'
                    className='font-semibold text-gray-300 hover:text-gray-400'>
                    <span>About</span>
                  </a>
                </nav>
                <div className='flex items-center justify-center space-x-2'>
                  <a
                    href='#'
                    className='inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200'>
                    <span>Sign In</span>
                    <svg
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                      className='opacity-50 hi-solid hi-arrow-right inline-block w-5 h-5'>
                      <path
                        fillRule='evenodd'
                        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </header>
          {/* END Header */}

          {/* Hero Content */}
          <div className='text-center container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32'>
            <h1 className='font-serif text-3xl md:text-4xl font-extrabold mb-4 text-white'>
              Work for a Cause, <br /> Not an Applause
            </h1>
            <h2 className='text-lg md:text-xl md:leading-relaxed font-medium text-gray-400 lg:w-2/3 mx-auto'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </h2>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16'>
              <a
                href='#'
                className='inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-rose-700 bg-rose-700 text-white hover:text-white hover:bg-rose-800 hover:border-rose-800 focus:ring focus:ring-rose-500 focus:ring-opacity-50 active:bg-rose-700 active:border-rose-700'>
                <svg
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  className='opacity-50 hi-solid hi-paper-airplane inline-block w-5 h-5'>
                  <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' />
                </svg>
                <span>Get Started</span>
              </a>
              <a
                href='#'
                className='inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-gray-700 bg-gray-700 text-white hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-700 active:border-gray-700'>
                <span>Learn more</span>
              </a>
            </div>
          </div>
          {/* END Hero Content */}
        </div>
      </div>
      {/* END Hero Section: Image Cover With Header Actions Dark */}
    </>
  )
}
