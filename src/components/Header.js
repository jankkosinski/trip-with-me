export default function Header({ children }) {
  const video_path = '/assets/videos/header.mp4';
  const poster_path = '/assets/images/header_image.png';
  const title = 'We are travel friends';
  const intro_text =
    'Come and join us we travel the most famous and beautiful places in the world';
  return (
    <div className='header'>
      <video
        className='header__video'
        poster={process.env.PUBLIC_URL + poster_path}
        src={process.env.PUBLIC_URL + video_path}
        autoPlay
        loop
        muted
      ></video>
      <div className='header__contents'>
        <div className='header__contents__text'>
          <div className='header__contents__text__child'>
            <h1 className='header__contents__text__child__h1'>{title}</h1>
            <p className='header__contents__text__child__p'>{intro_text}</p>
            <div className='header__contents__text__child__link'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
