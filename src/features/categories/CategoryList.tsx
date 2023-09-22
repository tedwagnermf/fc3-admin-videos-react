import {
  Box,
  Button,
  IconButton,
  Link,
  Typography,
  debounce,
} from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { selectCategories } from "./categorySlice";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

export const CategoryList = () => {
  const categories = useAppSelector(selectCategories);

  const rows: GridRowsProp = categories.map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
    isActive: category.is_active,
    createdAt: new Date(category.created_at).toLocaleDateString("pt-BR"),
  }));

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "isActive",
      headerName: "Active?",
      flex: 1,
      type: "boolean",
      renderCell: (row) => {
        return (
          <Typography color={row.value ? "primary" : "secondary"}>
            {row.value ? "Yes" : "No"}
          </Typography>
        );
      },
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
    },
    {
      field: "id",
      headerName: "Actions",
      flex: 1,
      renderCell: (row) => {
        return (
          <IconButton
            color="secondary"
            onClick={() => console.log("clicked")}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          LinkComponent={Link}
          href="/categories/create"
          style={{ marginBottom: "1rem" }}
        >
          New Category
        </Button>
      </Box>

      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          columns={columns}
          rows={rows}
          disableColumnSelector={true}
          disableColumnFilter={true}
          disableDensitySelector={true}
          pageSizeOptions={[2, 25, 50, 100]}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </div>
    </Box>
  );
};
