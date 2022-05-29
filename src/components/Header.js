export default function Header() {
  const video_path = '/assets/videos/header.mp4';
  const poster_path = '/assets/images/header_image.png';
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
    </div>
  );
}
