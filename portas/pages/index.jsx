import Porta from "../components/Porta";
import Presente from "../components/Presente";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      {/* <Presente /> */}
      <Porta selecionada={true} />
      <Porta selecionada={false} />
    </div>
  );
}
