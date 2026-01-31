import { UserRepository } from '../repositories/user.repository'
import { JWT } from '../shared/security/jwt'
import { Hash } from '../shared/security/hash' // Importando seu utilitário

export class AuthService {
  private userRepository: UserRepository

  constructor() {
    this.userRepository = new UserRepository()
  }

  async execute({ email, password }: any) {
    // 1. Busca o usuário pelo repositório
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new Error('Email ou senha incorretos')
    }

    // 2. Usa o SEU utilitário Hash para comparar as senhas
    const passwordMatch = await Hash.compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Email ou senha incorretos')
    }

    // 3. Gera o token usando seu utilitário JWT
    const token = JWT.sign({
      sub: user.id,
      role: user.role_id,
    })

    return {
      user: {
        id: user.id,
        email: user.email,
      },
      token,
    }
  }
}