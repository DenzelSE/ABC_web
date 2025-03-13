import Image from 'next/image';

export default function MyComponent() {
  return (
    <div
      style={{
        background: 'linear-gradient(to right, #1E3A8A, #A3A3A3)', // Blue to Gray Gradient
        padding: '20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1 style={{ color: 'white' }}>
        This page is currently under construction! 😁 Stay tuned for updates!
      </h1>
      <Image
        src="/gifs/busy.gif"  // Path to the GIF file
        alt="Mining animation"
        width={500}  // Set the width of the GIF
        height={500}  // Set the height of the GIF
      />
    </div>
  );
}
