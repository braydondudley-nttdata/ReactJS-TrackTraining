import { Fragment } from 'react'
import { useParams, Route } from 'react-router-dom'

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_DATA = [
    { id: 'q1', author: 'Max', text: 'this is a description' },
    { id: 'q2', author: 'Max1', text: 'this is a new description' },
    { id: 'q3', author: 'Max2', text: 'this is a newer description' }
]

function QuoteDetail() {
    const params = useParams(); // gets DYNAMIC value currently set in the url string ---> /:quoteId

    const quote = DUMMY_DATA.find(quote => quote.id === params.quoteId); //.find() takes a function as argument??
    // b/c it's stepping thru each element in array until it meets the conditional'

    // handle if quote was not apart of our data (was not found)
    if (!quote) {
        return <p>No quote found!</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    )
}

export default QuoteDetail
