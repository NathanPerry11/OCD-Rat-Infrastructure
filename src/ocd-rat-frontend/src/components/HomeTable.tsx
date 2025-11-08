import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
const queryResults = [
  {
    trialID: "OCD-4105",
    group: "Control",
    checkingCount: 12,
    homeBaseDuration_s: 5.8,
    videoSync: "Available",
  },
  {
    trialID: "OCD-4112",
    group: "Control",
    checkingCount: 15,
    homeBaseDuration_s: 3.1,
    videoSync: "Available",
  },
  {
    trialID: "OCD-4127",
    group: "Control",
    checkingCount: 11,
    homeBaseDuration_s: 7.5,
    videoSync: "Available",
  },
  {
    trialID: "OCD-4138",
    group: "Control",
    checkingCount: 14,
    homeBaseDuration_s: 4.9,
    videoSync: "Available",
  },
  {
    trialID: "OCD-4155",
    group: "Control",
    checkingCount: 18,
    homeBaseDuration_s: 2.2,
    videoSync: "Available",
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[120px]">Trial ID</TableHead>
          <TableHead>Group</TableHead>
          <TableHead>Checking Count</TableHead>
          <TableHead>Home-Base Duration (s)</TableHead>
          <TableHead className="text-right">Video Sync</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {queryResults.map((result) => (
          <TableRow key={result.trialID}>
            <TableCell className="font-medium">{result.trialID}</TableCell>
            <TableCell>{result.group}</TableCell>
            <TableCell>{result.checkingCount}</TableCell>
            <TableCell>{result.homeBaseDuration_s}</TableCell>
            <TableCell className="text-right">{result.videoSync}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total Results</TableCell>
          <TableCell className="text-right">5</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}