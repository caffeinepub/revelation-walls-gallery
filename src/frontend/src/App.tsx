import BrandedBar from './components/BrandedBar';

export default function App() {
  return (
    <div className="gallery-shell">
      <BrandedBar />
      <main className="gallery-iframe-wrapper">
        <iframe
          src="https://t3knologic.github.io/revelation-walls-gallery/"
          title="Revelation Walls Gallery"
          className="gallery-iframe"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-pointer-lock allow-top-navigation"
          allow="fullscreen; autoplay; encrypted-media"
          loading="eager"
          scrolling="yes"
        />
      </main>
    </div>
  );
}
