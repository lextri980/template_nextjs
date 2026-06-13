# Code Rules & Conventions

This document defines the coding standards and conventions for this Next.js project.

## 📁 Project Structure

### Component Organization

```
src/components/
├── common/              # Reusable UI components
│   ├── button/
│   │   ├── index.tsx           # Component implementation
│   │   ├── definition.ts       # TypeScript types/interfaces
│   │   └── style.module.scss   # Component-specific styles
│   └── form-input/      # Form-related components
│       ├── field/
│       ├── text-field/
│       ├── number-field/
│       ├── select/
│       ├── multi-select/
│       ├── radio-group/
│       ├── checkbox-group/
│       └── ...
```

### File Naming Conventions

- **Folders**: `kebab-case` (e.g., `form-input`, `radio-group`)
- **Component Files**: `index.tsx` (default export)
- **Type Definitions**: `definition.ts`
- **Styles**: `style.module.scss` (SCSS modules)
- **Pages**: `page.tsx` (Next.js App Router convention)
- **Layouts**: `layout.tsx` (Next.js App Router convention)

## 🎯 TypeScript Conventions

### Type Naming

- **Component Props**: Prefix with `T` and use PascalCase

  ```typescript
  export type TButtonProps = { ... };
  export type TTextFieldProps = { ... };
  ```

- **Options/Config Types**: Use descriptive names

  ```typescript
  export type TRadioOption = { ... };
  export type TCheckboxOption = { ... };
  ```

- **Enums**: Prefix with `E` and use PascalCase
  ```typescript
  export enum ENumberField {
    DEFAULT = 'number',
    SEPARATOR = 'currency',
  }
  ```

### Constants

- **Constants**: Use UPPER_SNAKE_CASE
  ```typescript
  export const ACTION_KEYS = { ... };
  export const CONTROL_KEYS = { ... };
  export const BASE_CHECKBOX_OPTIONS = [ ... ];
  ```

### Generic Types

- Use generic types for reusable components with React Hook Form
  ```typescript
  export type TFieldProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
  > = { ... };
  ```

## 🎨 Component Structure

### Standard Component Template

```typescript
import { TComponentNameProps } from './definition';
import styles from './style.module.scss';

export default function ComponentName(props: TComponentNameProps) {
  // [Props] Destructuring props
  const { prop1, prop2, ...rest } = props;

  // [State] State declarations (if needed)
  const [state, setState] = useState();

  /**
   * [Func] Handle event for the component
   */
  const handleEvent = () => { ... };

  /**
   * [Memo]
   * This value is memoized to optimize performance by avoiding unnecessary recalculations.
   */
  const memoValue = useMemo(() => { ... }, [dependencies]);

  /**
   * [Effect]
   * This effect runs when dependencies change to perform side effects such as data fetching or subscriptions.
   */
  useEffect(() => { ... }, [dependencies]);

  //! [JSX Section]
  return (
    <div className={styles['component-name-container']}>
      {/* Component content */}
    </div>
  );
}
```

### Component Code Sections (in order)

1. **Imports** - External libraries, then internal modules
2. **Component Function Declaration**
3. **[Props]** - Props destructuring
4. **[Hook]** - Custom hooks (e.g., useRoute, useToast); Library hooks (e.g., useTranslation, useDispatch)
5. **[State]** - State declarations (useState)
6. **[Form Hook]** - Form hooks (e.g., React Hook Form - useForm, useController)
7. **[API Hook]** - API hooks (e.g., useQuery, useMutation)
8. **[Func]** - Helper functions and event handlers
9. **[Async]** - Asynchronous functions and event handlers
10. **[Render]** - Functions rendering JSX
11. **[Memo]** - Memoized values (useMemo)
12. **[Callback]** - Memoized functions (useCallback)
13. **[Effect]** - Side effects (useEffect)
14. **[JSX Section]** - Return statement (marked with `//!`)

### Comments

- Use structured comments with section markers:
  - Props destructuring section
    ```typescript
    // [Props] Destructuring props
    ```
  - State declarations
    ```typescript
    // [State] State declarations
    ```
  - Memoized values/functions

    ```typescript
    /**
     * [Memo]
     * Describe the purpose of this memoized value
     */

    /**
     * [Callback]
     * Describe the purpose of this memoized function
     */
    ```

  - Side effects
    ```typescript
    /**
     * [Effect]
     * Describe the purpose of this effect and its dependencies
     */
    ```
  - Functions section

    ```typescript
    /**
     * [Func] Handle change event for the select component
     * @param data - Data object of option
     */

    /**
     * [Async] Fetch data from API
     * @param id - ID of the item to fetch
     */

    /**
     * [Render] Specific part of the component
     * @param id - ID of the item to fetch
     */
    ```

  - JSX return section
    ```typescript
    //! [JSX Section]
    ```
  - Type definitions
    ```typescript
    /**
     * [Type] Description of the type
     */
    ```
  - Constants
    ```typescript
    /**
     * [Const] Description of the constant
     */
    ```

- Add JSDoc comments for function parameters:
  ```typescript
  /**
   * [Func] Handle change event for the select component
   * @param data - Data object of option
   */
  const handleChange = (data: TSelectOption[] | null) => { ... };
  ```

## 🎨 Styling Conventions

### SCSS Modules

- Use SCSS modules for component-specific styles
- Main container class: `component-name-container`
  ```scss
  .text-field-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  ```

### Global Styles

- Use `:global()` for MUI component targeting
  ```scss
  :global(.MuiInputBase-root) {
    padding: 10px 65px 10px 15px !important;
  }
  ```

### CSS Variables

- Use CSS variables for theming
  ```scss
  border: 1px solid var(--input-border-primary);
  color: var(--error-primary);
  background: var(--background);
  ```

### Class Naming

- Use `kebab-case` for CSS classes
- Access with bracket notation in JSX: `className={styles['component-name']}`

## 📝 Form Components

### React Hook Form Integration

- Use `field` prop for form control

  ```typescript
  export type TTextFieldProps = {
    field?: ControllerRenderProps<Type, Type>;
    // ... other props
  };
  ```

- Spread field props on input elements:
  ```tsx
  <TextField {...field} {...rest} />
  ```

### Field Component Pattern

- Wrap form inputs with `Field` component:
  ```tsx
  <Field control={control} name='fieldName' label='Field Label'>
    <TextField placeholder='Enter value' />
  </Field>
  ```

### Error Handling

- Accept `error` prop as string:

  ```typescript
  export type TComponentProps = {
    error?: string;
  };
  ```

- Display error below input:
  ```tsx
  {
    error && <small className='error-text'>{error}</small>;
  }
  ```

## 🔧 Custom Hooks & Utilities

### Hook Exports

- Export from `hooks/index.ts`:
  ```typescript
  export { default as useRoute } from './use-route';
  export { default as useToast } from './use-toast';
  ```

### Utility Functions

- Place in `utils/` directory
- Create a util file using class
- Export from `utils/index.ts`

## 📦 Imports Organization

### Path Aliases

- Use `@/` for `src/` directory
  ```typescript
  import { Button } from '@/components/common';
  import { useRoute } from '@/hooks';
  ```

## 🎯 Best Practices

### State Management

- Use `useMemo` for computed values (no side effects)
- Use `useEffect` for side effects only
- Avoid calling `setState` inside `useMemo`

### Performance

- Use `React.memo` for expensive components
- Use `useCallback` for event handlers passed to children
- Use `useMemo` for expensive calculations

### Number Input Handling

- Store raw values (without formatting) in form state
- Display formatted values in the UI
- Use separate `displayValue` for visual presentation

### Component Reusability

- Accept MUI component props via spread operator: `{...rest}`
- Support disabled states at both component and option levels
- Provide flexible styling via `className` and `slotProps`

## 🚀 Next.js Specific

### Route Groups

- Use parentheses for layout grouping: `(auth-layout)`, `(main-layout)`
- Each group can have its own `layout.tsx`

### Metadata

- Export metadata from page components
- Use dynamic metadata functions when needed

### Server vs Client Components

- Mark client components with `'use client'` directive
- Keep server components default unless interactivity needed

## 📋 Common Patterns

### Option Lists

```typescript
export type TSelectOption = {
  id: string | number;
  label: string;
  disabled?: boolean;
};
```

### Collapse/Accordion Pattern

```tsx
<Collapse title='SECTION TITLE' defaultExpanded>
  <div className='cols-3'>{/* Content */}</div>
</Collapse>
```

### Grid Layout Classes

- Use utility classes: `cols-2`, `cols-3`, `cols-4`

---

## 🎓 Summary

**Key Principles:**

- Consistent file structure (index.tsx, definition.ts, style.module.scss)
- Type-safe with TypeScript conventions
- Organized code with section comments
- Reusable components with proper prop spreading
- SCSS modules for styling
- React Hook Form integration for forms
- Clean imports with path aliases
