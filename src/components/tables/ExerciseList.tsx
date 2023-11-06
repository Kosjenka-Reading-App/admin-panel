import DataTable from "react-data-table-component";

type ExerciseItem = {
  id: string;
  name: string;
  complexity: string;
  updatedAt: number;
};

const sortComplexities = (rowA: ExerciseItem, rowB: ExerciseItem) => {
  const a = rowA.complexity;
  const b = rowB.complexity;

  if (a === b) {
    return 0;
  }

  if (a === "Easy") {
    return -1;
  }

  if (a === "Medium") {
    return b === "Easy" ? 1 : -1;
  }

  return 1;
};

const displayComplexity = (exercise: ExerciseItem) => {
  switch (exercise.complexity) {
    case "Easy":
      return (
        <div className="flex items-center justify-center bg-green-200 text-green-600 font-semibold rounded px-2 py-1">
          <div className="bg-green-600 rounded-full h-2 w-2 mr-2"></div>
          {exercise.complexity}
        </div>
      );

    case "Medium":
      return (
        <span className="flex items-center justify-center bg-yellow-200 text-yellow-600 font-semibold rounded px-2 py-1">
          <div className="bg-yellow-600 rounded-full h-2 w-2 mr-2"></div>
          {exercise.complexity}
        </span>
      );

    case "Hard":
      return (
        <span className="flex items-center justify-center bg-red-200 text-red-600 font-semibold rounded px-2 py-1">
          <div className="bg-red-600 rounded-full h-2 w-2 mr-2"></div>
          {exercise.complexity}
        </span>
      );

    default:
      return <span>{exercise.complexity}</span>;
  }
};

const displayLastUpdate = (exercise: ExerciseItem) => {
  const date = new Date(exercise.updatedAt);
  const day = String(date.getDate()).padStart(2, "0");
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day} ${month} ${year}, ${hours}:${minutes}`;
};

const displayTitle = (exercise: ExerciseItem) => {
  // TODO CHANGE TO THEME COLORS
  return <span className="text-blue-600 font-semibold">{exercise.name}</span>;
};

const columns = [
  {
    name: "ID",
    selector: (row: ExerciseItem) => row.id,
    sortable: true,
    width: "10%",
  },
  {
    name: "Title",
    selector: (row: ExerciseItem) => row.name,
    sortable: true,
    cell: displayTitle,
    width: "50%",
  },
  {
    name: "Complexity",
    selector: (row: ExerciseItem) => row.complexity,
    sortable: true,
    cell: displayComplexity,
    width: "15%",
    sortFunction: sortComplexities,
  },
  {
    name: "Last Update",
    selector: (row: ExerciseItem) => row.updatedAt,
    sortable: true,
    cell: displayLastUpdate,
    width: "25%",
  },
];

const data: ExerciseItem[] = [
  {
    id: "1",
    name: "Bench Press",
    complexity: "Easy",
    updatedAt: Date.now(),
  },
  {
    id: "2",
    name: "Squats",
    complexity: "Medium",
    updatedAt: Date.now(),
  },
  {
    id: "3",
    name: "Deadlift",
    complexity: "Hard",
    updatedAt: Date.now(),
  },
];

export default function ExerciseList() {
  return <DataTable title="Exercises" columns={columns} data={data} />;
}
