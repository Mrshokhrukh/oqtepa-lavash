import menu from "../../pages/Home/home.module.scss";
const Categories = ({ categories, changeCategory }) => {
  return (
    <div
      className={`${menu.product}`}
      onClick={() => changeCategory(categories)}
    >
      <img src={categories.icon} alt="" />
      <p className={menu.product_title}>{categories.name}</p>
    </div>
  );
};

export default Categories;
