<% allMocks.forEach(function(value) { %>vi.mock(<%=value.path%>);
<% }) %>