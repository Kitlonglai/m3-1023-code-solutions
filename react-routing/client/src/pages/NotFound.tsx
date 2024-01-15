import './NotFound.css';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="Header-content">
      <div className="row">
        <div className="col text-center mb-5">
          <Link to="/catalog" className="text-muted">
            Uh oh, we could not find the page you were looking for!
          </Link>
          {/* TODO: Make this a link to the Catalog, with className "text-muted" */}
          <p className="text-muted">Return to the catalog</p>
        </div>
      </div>
    </div>
  );
}
