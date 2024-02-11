import ExecuteQuery from "@/lib/mysqldb";

export async function POST(req, res) {
  try {
    const { name, address, city, state, contact_number, image, email_id } =
      await req.json();

    const insertToDb = await ExecuteQuery(
      "INSERT INTO schools (name, address, city, state, contact_number, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, address, city, state, contact_number, image, email_id]
    );

    return Response.json({
      success: true,
      message: "Successfully added a new school",
      insertToDb,
    });
  } catch (error) {
    console.error(error);
  }
}
