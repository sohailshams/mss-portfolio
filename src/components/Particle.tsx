import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "../../particle-config";
import { Engine } from "tsparticles-engine";

const Particle: React.FC = () => {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  return (
    <Particles id="tsparticles" init={particlesInit} options={particleConfig} />
  );
};

export default Particle;
