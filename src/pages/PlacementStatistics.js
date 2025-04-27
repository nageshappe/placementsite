// import { useEffect, useState } from "react";

// export default function PlacementStatistics() {
//   const stats = [
//     { label: "Total Students Placed", value: 450 },
//     { label: "Highest Package (LPA)", value: 28 },
//     { label: "Average Package (LPA)", value: 6.5 },
//     { label: "Top Recruiters", value: 120 },
//   ];

//   const [animatedStats, setAnimatedStats] = useState(
//     stats.map(() => 0)
//   );

//   useEffect(() => {
//     const intervals = stats.map((stat, index) =>
//       setInterval(() => {
//         setAnimatedStats((prev) => {
//           const updated = [...prev];
//           if (updated[index] < stat.value) {
//             updated[index] = +(updated[index] + stat.value / 100).toFixed(1);
//           }
//           return updated;
//         });
//       }, 20)
//     );

//     return () => intervals.forEach(clearInterval);
//   }, [stats]);

//   return (
//     <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl shadow-xl">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold text-indigo-700 mb-8">
//           Placement Statistics
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
//             >
//               <div className="text-4xl font-extrabold text-indigo-600">
//                 {animatedStats[index]}
//                 {typeof stat.value === "number" && !Number.isInteger(stat.value) ? "" : "+"}
//               </div>
//               <div className="mt-2 text-gray-700 font-medium">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";

export default function YearwisePlacementTable() {
  const data = {
    2022: {
      totalPlaced: 2106,
      highestPackage: 47,
      averagePackage: 5.2,
      topRecruiters: 90,
    },
    2023: {
      totalPlaced: 1503,
      highestPackage: 57.5,
      averagePackage: 5.8,
      topRecruiters: 105,
    },
    2024: {
      totalPlaced: 906,
      highestPackage: 32.99,
      averagePackage: 6.5,
      topRecruiters: 120,
    },
  };

  const years = Object.keys(data).sort((a, b) => b - a);

  return (
    <section className="py-12 bg-gray-50 rounded-2xl shadow-xl">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-8">
          Yearwise Placement Statistics
        </h2>

        <div className="container py-4 overflow-x-auto">
          <table className="table table-bordered table-striped min-w-full bg-white rounded-xl shadow-md">
            <thead className="bg-indigo-600 ">
              <tr>
                <th className="py-3 px-6 text-left">Year</th>
                <th className="py-3 px-6 text-left">Total Students Placed</th>
                <th className="py-3 px-6 text-left">Highest Package (LPA)</th>
                <th className="py-3 px-6 text-left">Average Package (LPA)</th>
                <th className="py-3 px-6 text-left">Top Recruiters</th>
              </tr>
            </thead>
            <tbody>
              {years.map((year) => (
                <tr
                  key={year}
                  className="border-b hover:bg-indigo-50 transition"
                >
                  <td className="py-4 px-6 font-semibold text-indigo-700">{year}</td>
                  <td className="py-4 px-6">{data[year].totalPlaced}+</td>
                  <td className="py-4 px-6">{data[year].highestPackage} LPA</td>
                  <td className="py-4 px-6">{data[year].averagePackage} LPA</td>
                  <td className="py-4 px-6">{data[year].topRecruiters}+</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
