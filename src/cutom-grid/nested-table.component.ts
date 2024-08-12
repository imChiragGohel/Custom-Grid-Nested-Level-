import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-nested-table',
  standalone: true,
  imports: [CommonModule, TableModule],
  template: `
    <p-table [value]="data">
      <ng-template pTemplate="body" let-rowData>
        <tr>
          <td>
            <a *ngIf="rowData.groupData" (click)="rowData.expanded = !rowData.expanded">
              <i class="pi" [ngClass]="rowData.expanded ? 'pi-minus pr-1' : 'pi-plus pr-1'"></i>
              <b class="pr-1">{{rowData?.groupCurrentKey}} :-</b> {{ rowData.groupName }}  ({{rowData?.groupData?.length || 0}})
            </a>
            <span *ngIf="!rowData.groupData"> <b>END</b>  {{ rowData.groupName }}</span>
          </td>
          <td *ngIf="!rowData.groupData">{{ rowData.name }}</td>
          <td *ngIf="!rowData.groupData">{{ rowData.company }}</td>
        </tr>
        <tr *ngIf="rowData.expanded && rowData.groupData">
          <td colspan="3">
            <app-nested-table [data]="rowData.groupData"></app-nested-table>
          </td>
        </tr>
      </ng-template>
    </p-table>
  `,
  styles: [],
})
export class NestedTableComponent {
  @Input() data: any[] = [];

  constructor() {}
}
