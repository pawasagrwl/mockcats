export function processHTMLFile(htmlContent: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  const result = { varc: {}, dilr: {}, qa: {} };
  const analysis = { varc: {}, dilr: {}, qa: {}, overall: {} };

  function formatTime(timeString: string) {
    const digits = timeString.replace(/\D/g, "");
    const paddedDigits = digits.padStart(6, "0");
    return paddedDigits.replace(/(\d{2})(\d{2})(\d{2})/, "$1:$2:$3");
  }

  function processDiv(divId: string, dictName: string) {
    const div = doc.getElementById(divId);
    if (!div) return;

    const rows = div.querySelectorAll("table tbody tr");
    rows.forEach((row, index) => {
      const cells = row.querySelectorAll("td");
      if (cells.length >= 11) {
        result[dictName][index + 1] = {
          question: cells[1].textContent?.trim() || "",
          type: cells[2].textContent?.trim() || "",
          correct: cells[3].textContent?.trim() || "",
          your: cells[4].textContent?.trim() || "",
          marks: parseFloat(cells[5].textContent?.trim() || "0") || 0,
          diff: cells[6].textContent?.trim() || "",
          time: formatTime(cells[7].textContent?.trim() || ""),
          level: cells[8].textContent?.trim() || "",
          status: cells[9].textContent?.trim() || "",
          sq: cells[10].textContent?.trim() || "",
        };
      }
    });
  }

  function processAllDiv() {
    const allDiv = doc.getElementById("all");
    if (!allDiv) return;

    const rows = allDiv.querySelectorAll("table tbody tr");
    const sectionMap = { 0: "varc", 1: "dilr", 2: "qa", 3: "overall" };

    rows.forEach((row, index) => {
      const cells = row.querySelectorAll("td");
      if (cells.length >= 11) {
        const sectionKey = sectionMap[index];
        analysis[sectionKey] = {
          questions: parseInt(cells[1].textContent?.trim() || "0"),
          timeTaken: cells[2].textContent?.trim() || "",
          attempted: cells[3].textContent?.trim().split("\n")[0] || "",
          correct: cells[4].textContent?.trim().split("\n")[0] || "",
          incorrect: cells[5].textContent?.trim().split("\n")[0] || "",
          skipped: cells[6].textContent?.trim().split("\n")[0] || "",
          score: parseFloat(cells[7].textContent?.trim() || "0"),
          accuracy: parseFloat(cells[8].textContent?.trim() || "0"),
          percentile: parseFloat(cells[9].textContent?.trim() || "0"),
          benchmarkScore: parseInt(cells[10].textContent?.trim() || "0"),
        };
      }
    });
  }

  processDiv("msg", "varc");
  processDiv("pro", "dilr");
  processDiv("set", "qa");
  processAllDiv();

  return { result, analysis };
}
