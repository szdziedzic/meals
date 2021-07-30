class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordabillity,
    complexity,
    imageURL,
    duration,
    ingridents,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.affordabillity = affordabillity;
    this.title = title;
    this.complexity = complexity;
    this.imageURL = imageURL;
    this.duration = duration;
    this.ingridents = ingridents;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
