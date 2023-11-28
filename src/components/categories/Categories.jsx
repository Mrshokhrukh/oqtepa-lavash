import menu from "../../pages/Home/home.module.scss";
const Categories = ({ categories, changeCategory, category }) => {
  return (
    <div
      className={
        category === categories.name
          ? `${menu.product} ${menu.active}`
          : menu.product
      }
      onClick={() => changeCategory(categories)}
    >
      <img src={categories.icon} alt="" />
      <p className={menu.product_title}>{categories.name}</p>
    </div>
  );
};

export default Categories;
