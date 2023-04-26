export type SearchParamsTypes = {
  params: Params;
  searchParams: SearchParams;
};
type Params = {
  id: string;
};
type SearchParams = {
  name: string;
  image: string;
  unit_amount: number | null;
  features: string;
  id: string;
  description: string | null;
};
