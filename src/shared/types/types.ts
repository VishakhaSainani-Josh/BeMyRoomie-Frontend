import { FormikProps } from 'formik';

export enum UserRole {
  finder = 'finder',
  lister = 'lister'
}

export interface ErrorType {
  status: number;
  data: {
    message: string;
  };
}

export interface User {
  userId: number;
  name: string;
  phone: string;
  email: string;
  password: string;
  gender: 'Male' | 'Female';
  city: string;
  role: 'lister' | 'finder';
  required_vacancy: number;
  tags: string[];
}

export interface Property {
  property_id: number;
  lister_id: number;
  title: string;
  description: string;
  city: string;
  address: string;
  rent: number;
  facilities: string[];
  images: string[];
  preferred_gender: string;
  status: string;
  vacancy: number;
}

export interface UpdateProperty {
  property_id?: number;
  lister_id?: number;
  title?: string;
  description?: string;
  city?: string;
  address?: string;
  rent?: number;
  facilities?: string[];
  images?: string[];
  preferred_gender?: string;
  status?: string;
  vacancy?: number;
}

export interface PropertyDetailsComponentProps {
  propertyData: Property;
  currentImageIndex: number;
  role:UserRole;
  handleShowInterestClick:()=>void
  handleRemoveInterestClick:()=>void
}
export interface VacantPropertiesProps {
  properties: Property[] | undefined;
  isLister: boolean;
}

export interface ViewProfileComponentProps {
  profile: User;
  onUpdateClick: () => void;
}

export interface ILoginData {
  email: string;
  password: string;
}

interface property {
  title: string;
  description: string;
  preferred_gender: string;
  city: string;
  address: string;
  rent: number;
  status: string;
  facilities: string[];
  vacancy: number;
  images: string[];
}

export interface PropertyComponentProps {
  formData: property;
  errors: Record<string, string>;
  availableFacilities: string[];
  genderOptions: string[];
  statusOptions: string[];
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleFacilityChange: (facility: string) => void;
  handleCustomFacility: () => void;
  handleImageUrlsChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  facilityInput: string;
  setFacilityInput: React.Dispatch<React.SetStateAction<string>>;
  imageUrls: string;
}

export interface LoginFormProps {
  formik: FormikProps<ILoginData>;
}

export interface NavbarProps {
  user: User;
}

export interface IRegisterData {
  name: string;
  email: string;
  password: string;
  phone: number;
  gender: string;
  required_vacancy?: number;
}

export interface RegisterFormProps {
  role: UserRole;
  formik: FormikProps<IRegisterData>;
}

export interface VacantPropertiesResponse {
  message: string;
  data: Property[];
}

export interface PropertyDetailsResponse {
  message: string;
  data: Property;
}

export interface UpdatePropertyResponse {
  message: string;
}

export interface PreferenceResponse {
  message: string;
}

export interface AddPreferenceBody {
  tags: string[];
  city: string;
}

export interface ViewProfileResponse {
  message: string;
  data: User;
}
export type UpdateProfileBody = Omit<User, 'userId' | 'role' | 'password'>;

export interface UpdateProfileResponse {
  message: string;
}

export interface UpdateProfileComponentProps {
  initialProfile: UpdateProfileBody;
  availableTags: string[];
  onSubmit: (updatedprofile: UpdateProfileBody) => void;
}

export interface GetInterestedUsersResponse {
  message: string;
  data: Omit<User, 'password'>[];
}

export interface ViewInterestedUsersComponentProps {
  users: Omit<User, 'password'>[];
  propertyId: number;
}

export interface ShowInterestResponse{
  message:string
}

export interface RemoveInterestResponse{
  message:string
}