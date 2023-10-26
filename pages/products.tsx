import Navbar from "@/app/Components/Navbar";
import ProductsBanner from "@/app/pageComponents/Products/ProductsBanner";
import ProductItem from "@/app/pageComponents/Products/ProductItem";
import { productsList } from "@/app/data/Products";
import Footer from "@/app/Components/Footer";
import Head from "next/head";
const ProductsPage = () => {
  return (
    <>
     <Head>
        <title>Nos Produits | Ben Amar Menuiserie Aluminium</title>
        <meta
          name="description"
          content="AlumTec, Glazing solutions are our passion"
        />
        <meta
          name="keywords"
          content="Ben Amar Menuiserie Aluminium,Fenêtres aluminium,Portes aluminium,Portes et fenêtres Coulissante,Portes et fenêtres Battante,Volet Roulant,Facade Vitré,Facade Alucobond,Cabine Douche,Mur rideau,Pergola aluminium,Tables aluminium,Chaises aluminium,Canapé aluminium"
        />
        <meta name="author" content="Mohamed Gargouri" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />

      <section>
        <ProductsBanner />
        <div className="overflow-hidden">
          {productsList.map((item, index) => {
            return (
              <div key={"PRODUCT"+index}>
                <ProductItem
                  background={item.background}
                  direction={item.direction}
                  title={item.title}
                  descriptionList={item.descriptionList}
                  image={item.image}
                />
              </div>
            );
          })}
        </div>
      </section>
      <Footer/>
    </>
  );
};
export default ProductsPage;
