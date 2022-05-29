export default function Header() {
  return (
    <div className='header'>
      <video
        className='header__video'
        src={process.env.PUBLIC_URL + '/assets/videos/header.mp4'}
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
}
