import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Samosa",
    description: "Deep-fried pastry filled with spiced potatoes and peas",
    price: 30.00,
  },
  {
    id: "m2",
    name: "Vada Pav",
    description: "Spicy potato fritters served in a bun with chutneys",
    price: 25.00,
  },
  {
    id: "m3",
    name: "Pav Bhaji",
    description: "Mixed vegetable curry served with buttered buns",
    price: 120.00,
  },
  {
    id: "m4",
    name: "Pani Puri",
    description: "Crispy hollow puris filled with tangy tamarind water",
    price: 50.00,
  },
  {
    id: "m5",
    name: "Dosa",
    description: "Thin, crispy crepe made from fermented rice and lentil batter",
    price: 150.00,
  },
  {
    id: "m6",
    name: "Chole Bhature",
    description: "Spicy chickpea curry served with deep-fried bread",
    price: 120.00,
  },
  {
    id: "m7",
    name: "Biryani",
    description: "Fragrant rice dish cooked with meat or vegetables and spices",
    price: 100.00,
  },
  {
    id: "m8",
    name: "Chicken Tikka",
    description: "Grilled marinated chicken pieces with aromatic spices",
    price: 300.00,
  },
  {
    id: "m9",
    name: "Paneer Tikka",
    description: "Grilled marinated cottage cheese cubes with spices",
    price: 250.00,
  },
  {
    id: "m10",
    name: "Butter Chicken",
    description: "Creamy tomato-based chicken curry",
    price: 420.00,
  },
];


export default function AvailableMeals() {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}
