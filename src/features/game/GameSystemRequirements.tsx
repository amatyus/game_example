import {FC} from 'react'
import {SystemRequirementsTypes} from '../../api/freeToGameApi'

type SystemRequirementsProps = {
  requirements: SystemRequirementsTypes
}

const GameSystemRequirements: FC<SystemRequirementsProps> = ({
  requirements
}) => {
  return (
    <>
      <ul className="games_card_description">
        <li>
          <span>Os:</span> {requirements?.os}
        </li>
        <li>
          <span>Processor:</span> {requirements?.processor}
        </li>
        <li>
          <span>Graphics:</span> {requirements?.graphics}
        </li>
        <li>
          <span>Memory:</span> {requirements?.memory}
        </li>
        <li>
          <span>Storage:</span> {requirements?.storage}
        </li>
      </ul>
    </>
  )
}

export default GameSystemRequirements
