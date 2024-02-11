import ExecuteQuery from "@/lib/mysqldb";

export async function GET(req, res) {
  try {
    const schools = await ExecuteQuery("SELECT * FROM schools", []);

    if (schools.length === 0) {
      return Response.json({
        success: true,
        message: "No Content",
      });
    }

    return Response.json({
      success: true,
      message: "Successfully fetched schools data",
      schools,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}
