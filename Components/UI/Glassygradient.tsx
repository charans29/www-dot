import Bgbeams from './Bgbeams';

function Glassygradient() {
  return (
    <div className="h-screen overflow-hidden hero-back"
      style={{
        backgroundImage: 'linear-gradient(135deg,#1e1e20,#0e0e11 32%)'
      }}>
        <Bgbeams/>
        <div className="h-full translate-y-48"
            style={{
                backgroundImage: 'linear-gradient(90deg, rgba(212,83,83,1) -80%, rgba(0,12,15,1) 100%)'
            }}
        />
    </div>
  );
}

export default Glassygradient;
