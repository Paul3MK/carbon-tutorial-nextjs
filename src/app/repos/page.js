'use client';
import { Grid, Column } from '@carbon/react';
import RepoTable from './RepoTable';

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'createdAt',
    header: 'Created',
  },
];

export default function RepoPage() {
  return (
    <Grid className="repo-page">
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
        <RepoTable headers={headers} rows={rows} />
      </Column>
    </Grid>
  );
}
