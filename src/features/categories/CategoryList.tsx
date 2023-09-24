import {
  Box,
  Button,
  IconButton,
  Link,
  Typography,
  debounce,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteCategory, selectCategories } from "./categorySlice";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { link } from "fs";
import { useHref } from "react-router-dom";
import { useSnackbar } from "notistack";

export const CategoryList = () => {
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

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
      renderCell: (row) => {
        return (
          <Link href={`/categories/edit/${row.id}`} underline="hover">
            {row.value}
          </Link>
        );
      },
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
    // {
    //   field: "updatedAt",
    //   headerName: "Edit",
    //   flex: 1,
    //   renderCell: (row) => {
    //     return (
    //       <IconButton
    //         color="primary"
    //         onClick={() => console.log("edited")}
    //         aria-label="edit"
    //       >
    //         <EditIcon />
    //       </IconButton>
    //     );
    //   },
    // },
    {
      field: "id",
      headerName: "Delete",
      flex: 1,
      renderCell: (row) => {
        return (
          <IconButton
            color="secondary"
            onClick={() => handleDeleteCategory(row.value)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  function handleDeleteCategory(id: string) {
    console.log(id);
    dispatch(deleteCategory(id));
    enqueueSnackbar("Category deleted successfully", { variant: "success" });
  }

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

      <Box sx={{ display: "flex", height: 600 }}>
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
      </Box>
    </Box>
  );
};
