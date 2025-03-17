export const shortenDepartmentName = (name: string) => {
  return name
    .replace("ადმინისტრაციის", "ადმ.")
    .replace("ადამიანური რესურსების", "ადამ. რეს.")
    .replace("ფინანსების", "ფინ.")
    .replace("გაყიდვები და მარკეტინგის", "მარკეტინგი")
    .replace("ლოჯოსტიკის", "ლოგისტიკა")
    .replace("ტექნოლოგიების", "ტექნოლოგიები")
    .replace("მედიის", "მედია")
    .replace("დეპარტამენტი", "");
};
