import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Toolbar, Sort, Edit, Filter, Selection } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar = {['Delete', 'Add', 'Edit']}
      editSettings={{ allowDeleting: true, allowAdding:true, allowEditing:'true' }}
      width="auto"
      // allowExcelExport
      // allowPdfExport
      // contextMenuItems={contextMenuItems}
      // editSettings={editing}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services = {[Page, Toolbar, Sort, Edit, Filter, Selection]} />
      </GridComponent>
    </div>
  )
}

export default Customers




