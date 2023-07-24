import Layout from "../layout/Layout";

const HomePage = () => {
  return (
    <div>
      <Layout title="HOME">
        {
        
            <div className="grid grid-cols-2 gap-4 place-content-center h-48">
              <div>01</div>
              <div>02</div>
              <div>03</div>
              <div>04</div>
            </div>
       
        }
      </Layout>
    </div>
  );
};

export default HomePage;
