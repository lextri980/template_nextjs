import TextfieldCollapse from './components/textfield-collapse';

export default function FormSampleModule() {
  return (
    <div className='flex flex-col gap-4'>
      <p className='flex items-center justify-center text-2xl font-semibold'>
        FORM SAMPLE
      </p>
      <div className='flex px-4'>
        <TextfieldCollapse />
      </div>
    </div>
  );
}
