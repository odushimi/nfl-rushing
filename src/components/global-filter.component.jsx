export const GlobalFilter = ({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter
  }) => {
    const count = preGlobalFilteredRows && preGlobalFilteredRows.length;
  
    return (
      <span>
        Search:{" "}
        <input
          value={globalFilter || ""}
          onChange={e => {
            setGlobalFilter(e.target.value || undefined);
          }}
          placeholder={`${count} records...`}
          style={{
            border: "0"
          }}
        />
      </span>
    );
  };