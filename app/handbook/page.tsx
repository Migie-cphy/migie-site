import { redirect } from 'next/navigation'

export default function HandbookIndexRedirect() {
  redirect('/handbook/preface')
}
