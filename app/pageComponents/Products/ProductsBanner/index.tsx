const ProductsBanner = () => {
  return (
    <div className="bg-[url('/Images/Products/banner.webp')] h-[50vh] mt-[105px] w-full bg-cover bg-no-repeat bg-center">
      <div className="relative flex justify-center items-center flex-col h-[50vh] w-full backdrop-filter backdrop-blur-0 ease-linear transition">
        <div className="absolute z-10 inset-0 bg-black opacity-50"></div>
        <h1 className="relative  z-50 text-5xl font-semibold font-sharp text-center text-white uppercase">
          Nos produits
        </h1>
        <p className="relative z-50  font-lato text-lg text-center text-white ml-auto mr-auto">
          Explorez notre étendue de services, incluant volets roulants, portes
          extérieures, pergolas, façades vitrées, Alucobond, cabines de douche,
          murs rideaux, fenêtres, portes, menuiseries coulissantes, et
          menuiseries en aluminium battantes.
        </p>
      </div>
    </div>
  );
};
export default ProductsBanner;
