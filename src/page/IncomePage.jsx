import IncomeComponent from "../component/fromComponent.jsx";
import Layout from "../layout/Layout.jsx";

function IncomePage() {
  return (
    <Layout title="ইনকাম">
      {
        <IncomeComponent value="input income"/>
      }
     
    </Layout>
    
  );
}

export default IncomePage;