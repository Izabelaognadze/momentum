export const formatGeorgianDate = (dateString: string) => {
  const months = [
    "იანვ",
    "თებრ",
    "მარტ",
    "აპრილ",
    "მაის",
    "ივნ",
    "ივლ",
    "აგვ",
    "სექტ",
    "ოქტ",
    "ნოემბ",
    "დეკემბ",
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
};
