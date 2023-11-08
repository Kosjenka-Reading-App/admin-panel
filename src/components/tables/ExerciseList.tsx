import DataTable from "react-data-table-component";
import { FaPencilAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import exercisesService from "../../services/exercises";

type ExerciseItem = {
  id: string;
  title: string;
  complexity: string;
  updatedAt: number;
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
  return <span className="text-blue-600 font-semibold">{exercise.title}</span>;
};

const columns = [
  {
    name: "#",
    selector: (row: ExerciseItem) => row.id,
    sortable: true,
    width: "5%",
  },
  {
    name: "title",
    selector: (row: ExerciseItem) => row.title,
    sortable: true,
    cell: displayTitle,
    width: "50%",
  },
  {
    name: "complexity",
    selector: (row: ExerciseItem) => row.complexity,
    sortable: true,
    cell: displayComplexity,
    width: "15%",
  },
  {
    name: "last update",
    selector: (row: ExerciseItem) => row.updatedAt,
    sortable: true,
    cell: displayLastUpdate,
    width: "20%",
  },
  {
    name: "Actions",
    cell: () => (
      <div className="w-full flex justify-center">
        <div className="cursor-pointer">
          <FaPencilAlt />
        </div>
      </div>
    ),
    width: "10%",
    ignoreRowClick: true,
  },
];

export default function ExerciseList() {
  const [exercises, setExercises] = useState<ExerciseItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalExercises, setTotalExercises] = useState(0);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sort, setSort] = useState<{
    column: string | undefined;
    direction: "asc" | "desc";
  } | null>(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setIsLoading(true);

    exercisesService
      .listExercises(
        page,
        perPage,
        filter,
        sort?.column || "",
        sort?.direction || ""
      )
      .then((data) => {
        const exercises = data.data;
        setExercises(exercises);
        setIsLoading(false);
        setTotalExercises(exercises.length);
      });
  }, [filter, page, perPage, sort]);

  return (
    <div>
      <div className="bg-custom-light-grey py-3 px-4">
        <h1 className="font-bold text-2xl">
          Exercises{" "}
          <span className="bg-gray-200 px-2 py-1 text-xs rounded-xl text-blue-600 font-normal">
            {totalExercises}
          </span>
        </h1>
      </div>

      <div className="flex items-center justify-between px-4 py-3">
        <form
          className="flex"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const formData = new FormData(e.target as HTMLFormElement);
            const query = formData.get("query")?.toString() || "";
            setFilter(query);
          }}
        >
          <input
            type="text"
            name="query"
            placeholder="Search"
            className="border border-gray-300 rounded-l px-2 py-1 w-96 focus:outline-none focus:ring focus:border-custom-light-blue"
          />
          <button
            type="submit"
            className="bg-custom-dark-blue text-white px-3 py-2 rounded-r rounded-l-none font-semibold transition hover:bg-custom-hover-blue"
          >
            <AiOutlineSearch />
          </button>
        </form>
        <button
          className="bg-custom-dark-blue flex text-white px-3 py-2 rounded font-medium items-center justify-center text-sm hover:bg-custom-hover-blue transition"
          onClick={() => alert("Create new exercise")}
        >
          <FaPlus /> <span className="ml-2">New exercise </span>
        </button>
      </div>

      <DataTable
        columns={columns}
        data={exercises}
        progressPending={isLoading}
        persistTableHead
        pagination
        paginationServer
        paginationTotalRows={totalExercises}
        onSort={(column, direction) =>
          setSort({ column: column.name?.toString(), direction })
        }
        onChangeRowsPerPage={setPerPage}
        onChangePage={setPage}
      />
    </div>
  );
}